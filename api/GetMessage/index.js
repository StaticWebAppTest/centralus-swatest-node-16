module.exports = async function (context, req) {
  const date = "2023-08-18T05:08:13.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

