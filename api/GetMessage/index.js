module.exports = async function (context, req) {
  const date = "2023-05-31T00:55:24.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

