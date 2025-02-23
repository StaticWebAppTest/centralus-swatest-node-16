module.exports = async function (context, req) {
  const date = "2025-02-23T15:10:24.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

