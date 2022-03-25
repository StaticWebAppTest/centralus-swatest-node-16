module.exports = async function (context, req) {
  const date = "2022-03-25T10:12:15.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

