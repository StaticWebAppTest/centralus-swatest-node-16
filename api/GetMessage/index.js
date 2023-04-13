module.exports = async function (context, req) {
  const date = "2023-04-13T01:58:30.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

