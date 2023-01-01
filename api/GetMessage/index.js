module.exports = async function (context, req) {
  const date = "2023-01-01T13:12:31.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

