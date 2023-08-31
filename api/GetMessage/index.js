module.exports = async function (context, req) {
  const date = "2023-08-31T18:10:56.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

