module.exports = async function (context, req) {
  const date = "2023-03-10T22:08:55.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

