module.exports = async function (context, req) {
  const date = "2022-05-13T12:26:32.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

