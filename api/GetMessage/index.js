module.exports = async function (context, req) {
  const date = "2022-06-29T03:18:25.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

