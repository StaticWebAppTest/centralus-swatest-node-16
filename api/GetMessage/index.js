module.exports = async function (context, req) {
  const date = "2023-03-26T07:07:51.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

