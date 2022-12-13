module.exports = async function (context, req) {
  const date = "2022-12-13T10:10:47.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

