module.exports = async function (context, req) {
  const date = "2025-06-28T15:12:21.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

