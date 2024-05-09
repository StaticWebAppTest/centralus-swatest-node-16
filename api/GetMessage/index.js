module.exports = async function (context, req) {
  const date = "2024-05-09T10:11:55.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

