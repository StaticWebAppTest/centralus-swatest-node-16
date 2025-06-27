module.exports = async function (context, req) {
  const date = "2025-06-27T11:12:01.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

