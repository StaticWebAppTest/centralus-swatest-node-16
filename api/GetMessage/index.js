module.exports = async function (context, req) {
  const date = "2022-11-22T23:09:58.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

