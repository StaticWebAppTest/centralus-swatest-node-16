module.exports = async function (context, req) {
  const date = "2025-02-23T20:12:03.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

