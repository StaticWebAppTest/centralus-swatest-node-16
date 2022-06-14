module.exports = async function (context, req) {
  const date = "2022-06-14T19:08:50.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

