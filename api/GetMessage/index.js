module.exports = async function (context, req) {
  const date = "2022-06-12T20:11:27.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

