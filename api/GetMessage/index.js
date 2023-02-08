module.exports = async function (context, req) {
  const date = "2023-02-08T22:09:12.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

