module.exports = async function (context, req) {
  const date = "2025-01-27T05:11:52.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

