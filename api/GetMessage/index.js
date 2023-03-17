module.exports = async function (context, req) {
  const date = "2023-03-17T04:11:59.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

