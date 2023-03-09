module.exports = async function (context, req) {
  const date = "2023-03-09T12:20:05.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

