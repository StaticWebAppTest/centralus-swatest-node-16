module.exports = async function (context, req) {
  const date = "2023-04-29T07:08:59.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

