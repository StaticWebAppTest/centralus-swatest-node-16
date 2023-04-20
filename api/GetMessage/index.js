module.exports = async function (context, req) {
  const date = "2023-04-20T09:09:12.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

