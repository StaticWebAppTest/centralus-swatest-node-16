module.exports = async function (context, req) {
  const date = "2022-08-13T22:10:23.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

