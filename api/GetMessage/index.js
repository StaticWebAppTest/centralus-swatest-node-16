module.exports = async function (context, req) {
  const date = "2024-02-15T11:08:19.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

