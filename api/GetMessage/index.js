module.exports = async function (context, req) {
  const date = "2023-07-15T05:09:42.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

