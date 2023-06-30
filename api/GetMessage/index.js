module.exports = async function (context, req) {
  const date = "2023-06-30T04:11:26.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

