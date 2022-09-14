module.exports = async function (context, req) {
  const date = "2022-09-14T04:09:39.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

