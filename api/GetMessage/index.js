module.exports = async function (context, req) {
  const date = "2023-12-13T10:10:15.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

