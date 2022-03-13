module.exports = async function (context, req) {
  const date = "2022-03-13T06:15:24.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

