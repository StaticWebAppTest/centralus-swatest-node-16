module.exports = async function (context, req) {
  const date = "2023-11-20T15:10:06.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

