module.exports = async function (context, req) {
  const date = "2022-12-10T02:10:26.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

