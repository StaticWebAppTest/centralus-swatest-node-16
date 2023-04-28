module.exports = async function (context, req) {
  const date = "2023-04-28T03:09:17.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

