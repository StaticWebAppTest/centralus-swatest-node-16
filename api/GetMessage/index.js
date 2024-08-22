module.exports = async function (context, req) {
  const date = "2024-08-22T17:10:22.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

