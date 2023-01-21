module.exports = async function (context, req) {
  const date = "2023-01-21T03:10:11.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

