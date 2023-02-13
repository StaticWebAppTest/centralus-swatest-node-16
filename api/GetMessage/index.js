module.exports = async function (context, req) {
  const date = "2023-02-13T13:19:24.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

