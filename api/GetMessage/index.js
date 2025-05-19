module.exports = async function (context, req) {
  const date = "2025-05-19T12:27:42.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

