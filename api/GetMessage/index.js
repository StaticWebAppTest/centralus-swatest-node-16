module.exports = async function (context, req) {
  const date = "2024-03-18T01:41:59.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

