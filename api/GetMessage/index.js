module.exports = async function (context, req) {
  const date = "2022-12-13T16:13:34.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

