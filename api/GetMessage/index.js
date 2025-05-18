module.exports = async function (context, req) {
  const date = "2025-05-18T10:12:44.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

