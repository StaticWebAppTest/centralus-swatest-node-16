module.exports = async function (context, req) {
  const date = "2023-04-26T07:08:37.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

