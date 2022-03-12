module.exports = async function (context, req) {
  const date = "2022-03-12T08:11:55.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

