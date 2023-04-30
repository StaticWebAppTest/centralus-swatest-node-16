module.exports = async function (context, req) {
  const date = "2023-04-30T03:09:03.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

