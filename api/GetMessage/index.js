module.exports = async function (context, req) {
  const date = "2022-03-14T12:16:46.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

