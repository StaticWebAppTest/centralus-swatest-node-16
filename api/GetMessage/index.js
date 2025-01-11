module.exports = async function (context, req) {
  const date = "2025-01-11T16:12:48.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

