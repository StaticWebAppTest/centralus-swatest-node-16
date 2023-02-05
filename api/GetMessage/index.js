module.exports = async function (context, req) {
  const date = "2023-02-05T08:11:34.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

