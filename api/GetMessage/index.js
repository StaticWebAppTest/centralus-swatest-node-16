module.exports = async function (context, req) {
  const date = "2024-05-12T02:25:10.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

