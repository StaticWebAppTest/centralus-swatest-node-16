module.exports = async function (context, req) {
  const date = "2022-09-25T19:09:54.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

