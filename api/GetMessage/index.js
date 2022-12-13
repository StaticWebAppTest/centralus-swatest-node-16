module.exports = async function (context, req) {
  const date = "2022-12-13T22:09:18.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

