module.exports = async function (context, req) {
  const date = "2022-09-13T09:13:55.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

