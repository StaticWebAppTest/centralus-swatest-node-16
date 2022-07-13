module.exports = async function (context, req) {
  const date = "2022-07-13T10:13:53.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

