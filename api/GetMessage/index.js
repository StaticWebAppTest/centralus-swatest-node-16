module.exports = async function (context, req) {
  const date = "2022-06-24T13:33:31.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

