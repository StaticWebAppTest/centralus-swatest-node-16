module.exports = async function (context, req) {
  const date = "2024-08-29T07:11:26.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

