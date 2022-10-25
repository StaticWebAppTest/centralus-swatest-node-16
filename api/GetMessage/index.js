module.exports = async function (context, req) {
  const date = "2022-10-25T21:12:43.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

