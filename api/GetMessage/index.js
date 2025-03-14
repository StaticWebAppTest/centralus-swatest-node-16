module.exports = async function (context, req) {
  const date = "2025-03-14T14:11:23.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

