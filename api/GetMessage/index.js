module.exports = async function (context, req) {
  const date = "2025-09-25T12:27:31.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

