module.exports = async function (context, req) {
  const date = "2022-03-13T22:09:22.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

