module.exports = async function (context, req) {
  const date = "2024-04-20T22:09:10.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

