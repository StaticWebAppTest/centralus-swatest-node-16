module.exports = async function (context, req) {
  const date = "2025-11-12T06:21:12.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

