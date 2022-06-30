module.exports = async function (context, req) {
  const date = "2022-06-30T03:08:57.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

