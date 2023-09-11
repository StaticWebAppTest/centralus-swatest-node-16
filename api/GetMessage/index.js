module.exports = async function (context, req) {
  const date = "2023-09-11T03:09:05.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

