module.exports = async function (context, req) {
  const date = "2022-09-13T22:13:32.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

