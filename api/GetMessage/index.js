module.exports = async function (context, req) {
  const date = "2023-06-07T05:08:14.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

