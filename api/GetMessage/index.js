module.exports = async function (context, req) {
  const date = "2022-06-13T10:12:29.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

