module.exports = async function (context, req) {
  const date = "2023-04-08T18:09:58.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

