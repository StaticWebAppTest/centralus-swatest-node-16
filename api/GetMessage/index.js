module.exports = async function (context, req) {
  const date = "2023-09-14T16:11:22.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

