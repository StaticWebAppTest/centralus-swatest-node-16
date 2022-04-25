module.exports = async function (context, req) {
  const date = "2022-04-25T16:14:28.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

