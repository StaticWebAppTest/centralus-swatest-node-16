module.exports = async function (context, req) {
  const date = "2022-08-08T12:21:26.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

