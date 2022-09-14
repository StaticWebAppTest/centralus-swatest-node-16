module.exports = async function (context, req) {
  const date = "2022-09-14T12:25:28.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

