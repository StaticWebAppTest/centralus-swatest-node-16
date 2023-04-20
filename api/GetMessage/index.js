module.exports = async function (context, req) {
  const date = "2023-04-20T14:08:25.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

