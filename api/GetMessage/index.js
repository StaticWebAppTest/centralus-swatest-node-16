module.exports = async function (context, req) {
  const date = "2024-06-29T01:55:13.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

