module.exports = async function (context, req) {
  const date = "2022-11-08T18:14:35.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

