module.exports = async function (context, req) {
  const date = "2023-04-20T11:07:32.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

