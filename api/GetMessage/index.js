module.exports = async function (context, req) {
  const date = "2022-08-19T09:11:24.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

