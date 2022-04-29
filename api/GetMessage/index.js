module.exports = async function (context, req) {
  const date = "2022-04-29T13:36:15.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

