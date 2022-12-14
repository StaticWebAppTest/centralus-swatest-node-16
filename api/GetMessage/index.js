module.exports = async function (context, req) {
  const date = "2022-12-14T19:08:14.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

