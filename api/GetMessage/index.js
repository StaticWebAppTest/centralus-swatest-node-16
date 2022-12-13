module.exports = async function (context, req) {
  const date = "2022-12-13T15:12:20.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

