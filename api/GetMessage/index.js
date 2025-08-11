module.exports = async function (context, req) {
  const date = "2025-08-11T12:30:27.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

