module.exports = async function (context, req) {
  const date = "2024-05-30T08:13:31.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

