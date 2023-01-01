module.exports = async function (context, req) {
  const date = "2023-01-01T18:10:31.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

