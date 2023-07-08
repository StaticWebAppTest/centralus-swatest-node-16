module.exports = async function (context, req) {
  const date = "2023-07-08T16:11:34.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

