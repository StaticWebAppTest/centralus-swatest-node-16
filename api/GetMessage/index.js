module.exports = async function (context, req) {
  const date = "2022-05-13T13:40:51.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

