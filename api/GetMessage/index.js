module.exports = async function (context, req) {
  const date = "2024-01-09T07:10:49.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

