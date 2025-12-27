module.exports = async function (context, req) {
  const date = "2025-12-27T11:11:36.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

