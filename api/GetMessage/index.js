module.exports = async function (context, req) {
  const date = "2022-08-26T21:09:51.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

