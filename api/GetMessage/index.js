module.exports = async function (context, req) {
  const date = "2022-05-31T11:09:59.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

