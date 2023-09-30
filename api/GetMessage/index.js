module.exports = async function (context, req) {
  const date = "2023-09-30T23:07:51.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

