module.exports = async function (context, req) {
  const date = "2023-06-09T07:08:26.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

