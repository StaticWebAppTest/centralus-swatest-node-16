module.exports = async function (context, req) {
  const date = "2025-01-17T11:10:19.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

