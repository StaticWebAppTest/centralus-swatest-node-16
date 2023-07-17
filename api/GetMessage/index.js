module.exports = async function (context, req) {
  const date = "2023-07-17T20:10:44.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

