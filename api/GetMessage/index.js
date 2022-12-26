module.exports = async function (context, req) {
  const date = "2022-12-26T10:09:48.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

