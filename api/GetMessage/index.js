module.exports = async function (context, req) {
  const date = "2023-03-09T20:10:58.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

