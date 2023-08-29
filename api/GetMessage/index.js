module.exports = async function (context, req) {
  const date = "2023-08-29T07:08:28.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

