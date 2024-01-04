module.exports = async function (context, req) {
  const date = "2024-01-04T09:09:29.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

