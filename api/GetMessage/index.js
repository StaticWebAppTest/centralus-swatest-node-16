module.exports = async function (context, req) {
  const date = "2022-10-27T16:16:59.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

