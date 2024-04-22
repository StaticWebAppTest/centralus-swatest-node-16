module.exports = async function (context, req) {
  const date = "2024-04-22T05:10:12.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

