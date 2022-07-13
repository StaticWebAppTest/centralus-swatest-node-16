module.exports = async function (context, req) {
  const date = "2022-07-13T13:35:05.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

