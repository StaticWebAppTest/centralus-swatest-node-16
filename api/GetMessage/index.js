module.exports = async function (context, req) {
  const date = "2023-07-20T10:09:53.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

