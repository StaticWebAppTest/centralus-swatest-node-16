module.exports = async function (context, req) {
  const date = "2023-10-20T21:07:17.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

