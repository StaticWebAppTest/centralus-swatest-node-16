module.exports = async function (context, req) {
  const date = "2022-08-13T10:11:39.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

