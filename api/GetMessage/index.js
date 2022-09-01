module.exports = async function (context, req) {
  const date = "2022-09-01T19:08:36.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

