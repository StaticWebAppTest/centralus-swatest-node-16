module.exports = async function (context, req) {
  const date = "2023-05-06T01:55:06.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

