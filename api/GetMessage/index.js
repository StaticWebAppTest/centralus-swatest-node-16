module.exports = async function (context, req) {
  const date = "2023-07-26T19:07:04.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

