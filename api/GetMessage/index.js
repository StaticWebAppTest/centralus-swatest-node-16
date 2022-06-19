module.exports = async function (context, req) {
  const date = "2022-06-19T21:09:44.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

