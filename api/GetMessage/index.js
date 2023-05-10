module.exports = async function (context, req) {
  const date = "2023-05-10T23:09:26.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

