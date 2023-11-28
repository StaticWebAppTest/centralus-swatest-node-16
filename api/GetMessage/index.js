module.exports = async function (context, req) {
  const date = "2023-11-28T07:08:46.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

