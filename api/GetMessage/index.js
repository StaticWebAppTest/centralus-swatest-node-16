module.exports = async function (context, req) {
  const date = "2022-07-18T13:43:26.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

