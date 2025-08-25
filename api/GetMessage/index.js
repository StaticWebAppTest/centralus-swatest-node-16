module.exports = async function (context, req) {
  const date = "2025-08-25T15:14:07.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

