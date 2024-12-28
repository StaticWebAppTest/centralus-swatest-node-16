module.exports = async function (context, req) {
  const date = "2024-12-28T07:09:52.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

