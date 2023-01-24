module.exports = async function (context, req) {
  const date = "2023-01-24T22:08:50.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

