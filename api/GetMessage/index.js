module.exports = async function (context, req) {
  const date = "2022-03-26T19:08:04.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

