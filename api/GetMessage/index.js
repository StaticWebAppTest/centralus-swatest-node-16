module.exports = async function (context, req) {
  const date = "2023-06-05T16:11:42.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

