module.exports = async function (context, req) {
  const date = "2024-03-29T01:41:19.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

