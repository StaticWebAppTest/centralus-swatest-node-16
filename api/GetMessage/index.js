module.exports = async function (context, req) {
  const date = "2023-04-30T15:07:52.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

