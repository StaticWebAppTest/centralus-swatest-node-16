module.exports = async function (context, req) {
  const date = "2023-01-27T08:12:22.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

