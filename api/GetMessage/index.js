module.exports = async function (context, req) {
  const date = "2022-04-09T05:09:13.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

