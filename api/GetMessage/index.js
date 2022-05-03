module.exports = async function (context, req) {
  const date = "2022-05-03T08:14:20.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

