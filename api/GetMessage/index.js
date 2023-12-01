module.exports = async function (context, req) {
  const date = "2023-12-01T13:12:47.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

