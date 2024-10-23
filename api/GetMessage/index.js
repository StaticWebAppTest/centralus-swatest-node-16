module.exports = async function (context, req) {
  const date = "2024-10-23T13:20:24.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

