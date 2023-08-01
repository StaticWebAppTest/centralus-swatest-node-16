module.exports = async function (context, req) {
  const date = "2023-08-01T06:12:34.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

