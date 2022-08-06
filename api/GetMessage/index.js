module.exports = async function (context, req) {
  const date = "2022-08-06T17:11:12.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

