module.exports = async function (context, req) {
  const date = "2023-07-08T14:08:26.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

