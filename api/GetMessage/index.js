module.exports = async function (context, req) {
  const date = "2022-12-05T22:09:16.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

