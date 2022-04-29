module.exports = async function (context, req) {
  const date = "2022-04-29T07:10:40.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

