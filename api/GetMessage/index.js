module.exports = async function (context, req) {
  const date = "2022-05-03T15:16:15.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

