module.exports = async function (context, req) {
  const date = "2023-12-31T01:54:10.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

