module.exports = async function (context, req) {
  const date = "2025-06-15T15:12:25.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

