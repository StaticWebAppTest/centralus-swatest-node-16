module.exports = async function (context, req) {
  const date = "2024-08-20T13:15:00.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

