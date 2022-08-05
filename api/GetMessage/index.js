module.exports = async function (context, req) {
  const date = "2022-08-05T04:38:55.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

