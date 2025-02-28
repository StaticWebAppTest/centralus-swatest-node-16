module.exports = async function (context, req) {
  const date = "2025-02-28T15:12:34.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

