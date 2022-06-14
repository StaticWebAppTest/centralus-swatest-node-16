module.exports = async function (context, req) {
  const date = "2022-06-14T23:10:02.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

