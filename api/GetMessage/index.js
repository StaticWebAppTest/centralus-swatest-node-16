module.exports = async function (context, req) {
  const date = "2022-10-06T03:27:16.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

