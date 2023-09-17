module.exports = async function (context, req) {
  const date = "2023-09-17T22:07:32.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

