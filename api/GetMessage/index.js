module.exports = async function (context, req) {
  const date = "2025-06-07T13:21:46.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

