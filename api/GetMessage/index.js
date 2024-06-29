module.exports = async function (context, req) {
  const date = "2024-06-29T07:10:12.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

