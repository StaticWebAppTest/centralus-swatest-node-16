module.exports = async function (context, req) {
  const date = "2022-03-20T21:08:51.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

