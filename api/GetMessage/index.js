module.exports = async function (context, req) {
  const date = "2023-06-30T15:09:42.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

