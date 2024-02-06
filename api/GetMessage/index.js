module.exports = async function (context, req) {
  const date = "2024-02-06T21:07:56.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

