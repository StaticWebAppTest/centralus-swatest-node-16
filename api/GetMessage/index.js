module.exports = async function (context, req) {
  const date = "2022-08-18T21:10:15.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

