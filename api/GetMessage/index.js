module.exports = async function (context, req) {
  const date = "2023-04-30T05:08:06.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

