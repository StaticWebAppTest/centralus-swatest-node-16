module.exports = async function (context, req) {
  const date = "2024-02-29T01:39:50.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

