module.exports = async function (context, req) {
  const date = "2024-01-04T08:11:54.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

