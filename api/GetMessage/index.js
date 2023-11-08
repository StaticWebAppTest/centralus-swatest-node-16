module.exports = async function (context, req) {
  const date = "2023-11-08T08:11:31.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

