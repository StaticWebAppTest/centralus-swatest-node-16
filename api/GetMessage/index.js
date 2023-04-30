module.exports = async function (context, req) {
  const date = "2023-04-30T10:08:48.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

