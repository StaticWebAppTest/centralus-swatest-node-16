module.exports = async function (context, req) {
  const date = "2024-03-07T02:08:44.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

