module.exports = async function (context, req) {
  const date = "2024-09-20T18:15:01.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

