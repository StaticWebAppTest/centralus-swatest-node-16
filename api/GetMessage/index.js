module.exports = async function (context, req) {
  const date = "2023-06-30T03:15:14.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

