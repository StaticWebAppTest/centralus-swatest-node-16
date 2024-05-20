module.exports = async function (context, req) {
  const date = "2024-05-20T18:12:33.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

