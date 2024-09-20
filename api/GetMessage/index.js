module.exports = async function (context, req) {
  const date = "2024-09-20T19:09:07.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

