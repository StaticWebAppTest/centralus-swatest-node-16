module.exports = async function (context, req) {
  const date = "2023-08-18T21:06:44.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

