module.exports = async function (context, req) {
  const date = "2025-08-25T13:26:15.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

