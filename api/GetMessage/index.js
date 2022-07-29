module.exports = async function (context, req) {
  const date = "2022-07-29T16:15:34.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

