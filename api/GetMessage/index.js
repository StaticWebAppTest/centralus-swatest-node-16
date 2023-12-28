module.exports = async function (context, req) {
  const date = "2023-12-28T17:08:15.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

