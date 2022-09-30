module.exports = async function (context, req) {
  const date = "2022-09-30T14:29:06.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

