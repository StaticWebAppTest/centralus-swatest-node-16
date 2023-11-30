module.exports = async function (context, req) {
  const date = "2023-11-30T00:43:19.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

