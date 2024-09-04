module.exports = async function (context, req) {
  const date = "2024-09-04T00:57:44.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

