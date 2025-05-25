module.exports = async function (context, req) {
  const date = "2025-05-25T21:11:19.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

