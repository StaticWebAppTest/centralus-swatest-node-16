module.exports = async function (context, req) {
  const date = "2025-07-05T11:10:40.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

