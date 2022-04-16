module.exports = async function (context, req) {
  const date = "2022-04-16T14:09:35.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

