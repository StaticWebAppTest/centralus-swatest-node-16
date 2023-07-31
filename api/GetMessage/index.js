module.exports = async function (context, req) {
  const date = "2023-07-31T07:08:48.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

