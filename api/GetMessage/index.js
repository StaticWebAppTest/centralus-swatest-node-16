module.exports = async function (context, req) {
  const date = "2023-11-08T16:11:31.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

