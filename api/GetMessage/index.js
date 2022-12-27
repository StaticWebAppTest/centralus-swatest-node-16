module.exports = async function (context, req) {
  const date = "2022-12-27T10:10:02.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

