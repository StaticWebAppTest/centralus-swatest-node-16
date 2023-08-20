module.exports = async function (context, req) {
  const date = "2023-08-20T00:40:43.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

