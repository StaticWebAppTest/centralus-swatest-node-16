module.exports = async function (context, req) {
  const date = "2024-10-08T14:12:53.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

