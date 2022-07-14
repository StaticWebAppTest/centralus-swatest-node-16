module.exports = async function (context, req) {
  const date = "2022-07-14T19:08:49.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

