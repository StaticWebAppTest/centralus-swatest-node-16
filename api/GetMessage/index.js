module.exports = async function (context, req) {
  const date = "2024-07-08T05:12:28.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

