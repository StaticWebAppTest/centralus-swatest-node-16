module.exports = async function (context, req) {
  const date = "2022-09-20T10:13:23.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

