module.exports = async function (context, req) {
  const date = "2022-03-01T19:08:13.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

