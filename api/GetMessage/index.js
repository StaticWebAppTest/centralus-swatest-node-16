module.exports = async function (context, req) {
  const date = "2023-03-30T13:16:09.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

