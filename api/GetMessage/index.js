module.exports = async function (context, req) {
  const date = "2023-12-30T15:08:12.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

