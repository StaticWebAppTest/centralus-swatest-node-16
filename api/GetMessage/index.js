module.exports = async function (context, req) {
  const date = "2022-06-29T15:42:50.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

