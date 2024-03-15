module.exports = async function (context, req) {
  const date = "2024-03-15T20:11:06.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

