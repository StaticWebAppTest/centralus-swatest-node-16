module.exports = async function (context, req) {
  const date = "2023-07-22T10:08:06.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

