module.exports = async function (context, req) {
  const date = "2022-05-29T03:05:21.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

