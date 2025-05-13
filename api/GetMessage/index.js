module.exports = async function (context, req) {
  const date = "2025-05-13T10:14:40.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

