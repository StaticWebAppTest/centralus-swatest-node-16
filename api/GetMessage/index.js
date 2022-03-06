module.exports = async function (context, req) {
  const date = "2022-03-06T15:09:33.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

