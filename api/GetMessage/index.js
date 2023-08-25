module.exports = async function (context, req) {
  const date = "2023-08-25T20:08:38.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

