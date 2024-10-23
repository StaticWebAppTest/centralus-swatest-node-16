module.exports = async function (context, req) {
  const date = "2024-10-23T02:15:10.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

