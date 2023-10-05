module.exports = async function (context, req) {
  const date = "2023-10-05T19:06:50.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

