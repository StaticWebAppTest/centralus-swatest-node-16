module.exports = async function (context, req) {
  const date = "2024-02-06T23:08:56.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

