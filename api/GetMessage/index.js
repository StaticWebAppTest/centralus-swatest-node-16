module.exports = async function (context, req) {
  const date = "2023-09-26T07:08:35.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

