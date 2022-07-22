module.exports = async function (context, req) {
  const date = "2022-07-22T07:11:28.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

