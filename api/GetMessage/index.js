module.exports = async function (context, req) {
  const date = "2022-05-09T10:12:34.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

