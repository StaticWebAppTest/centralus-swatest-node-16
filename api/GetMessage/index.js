module.exports = async function (context, req) {
  const date = "2024-10-05T05:10:55.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

