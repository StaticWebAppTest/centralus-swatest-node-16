module.exports = async function (context, req) {
  const date = "2023-01-28T21:07:54.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

