module.exports = async function (context, req) {
  const date = "2023-04-29T22:07:28.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

