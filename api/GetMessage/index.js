module.exports = async function (context, req) {
  const date = "2024-08-30T15:11:26.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

