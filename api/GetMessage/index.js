module.exports = async function (context, req) {
  const date = "2023-10-06T14:08:29.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

