module.exports = async function (context, req) {
  const date = "2024-06-17T21:09:53.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

