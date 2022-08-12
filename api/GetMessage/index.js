module.exports = async function (context, req) {
  const date = "2022-08-12T19:08:49.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

