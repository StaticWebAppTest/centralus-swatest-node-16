module.exports = async function (context, req) {
  const date = "2024-09-06T03:12:54.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

