module.exports = async function (context, req) {
  const date = "2023-05-23T22:08:18.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

