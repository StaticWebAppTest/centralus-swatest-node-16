module.exports = async function (context, req) {
  const date = "2022-10-07T10:16:20.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

