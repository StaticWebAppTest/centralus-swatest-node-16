module.exports = async function (context, req) {
  const date = "2022-08-29T11:10:05.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

