module.exports = async function (context, req) {
  const date = "2022-06-29T19:08:29.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

