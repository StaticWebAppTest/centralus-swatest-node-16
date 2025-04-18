module.exports = async function (context, req) {
  const date = "2025-04-18T15:12:55.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

