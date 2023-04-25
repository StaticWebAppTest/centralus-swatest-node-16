module.exports = async function (context, req) {
  const date = "2023-04-25T22:08:20.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

