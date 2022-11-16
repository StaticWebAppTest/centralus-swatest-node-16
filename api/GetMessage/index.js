module.exports = async function (context, req) {
  const date = "2022-11-16T13:32:14.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

