module.exports = async function (context, req) {
  const date = "2024-05-06T10:10:13.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

