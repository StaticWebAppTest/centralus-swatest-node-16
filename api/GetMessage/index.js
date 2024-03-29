module.exports = async function (context, req) {
  const date = "2024-03-29T08:11:35.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

