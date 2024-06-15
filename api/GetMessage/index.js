module.exports = async function (context, req) {
  const date = "2024-06-15T05:10:39.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

