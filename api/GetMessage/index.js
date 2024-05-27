module.exports = async function (context, req) {
  const date = "2024-05-27T08:13:22.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

