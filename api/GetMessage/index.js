module.exports = async function (context, req) {
  const date = "2023-04-24T19:07:13.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

