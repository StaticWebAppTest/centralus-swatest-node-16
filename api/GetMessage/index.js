module.exports = async function (context, req) {
  const date = "2025-05-11T10:12:26.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

