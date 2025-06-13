module.exports = async function (context, req) {
  const date = "2025-06-13T12:27:28.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

