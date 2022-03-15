module.exports = async function (context, req) {
  const date = "2022-03-15T13:17:51.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

