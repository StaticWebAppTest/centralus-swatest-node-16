module.exports = async function (context, req) {
  const date = "2025-02-17T12:23:37.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

