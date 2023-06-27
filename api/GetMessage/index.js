module.exports = async function (context, req) {
  const date = "2023-06-27T16:13:12.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

