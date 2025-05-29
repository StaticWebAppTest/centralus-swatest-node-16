module.exports = async function (context, req) {
  const date = "2025-05-29T12:27:02.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

