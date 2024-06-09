module.exports = async function (context, req) {
  const date = "2024-06-09T02:01:36.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

