module.exports = async function (context, req) {
  const date = "2023-09-30T13:08:42.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

