module.exports = async function (context, req) {
  const date = "2024-03-04T13:12:24.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

