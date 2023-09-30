module.exports = async function (context, req) {
  const date = "2023-09-30T03:08:46.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

