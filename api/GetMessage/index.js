module.exports = async function (context, req) {
  const date = "2024-05-15T11:08:25.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

