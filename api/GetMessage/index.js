module.exports = async function (context, req) {
  const date = "2023-08-19T21:06:27.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

