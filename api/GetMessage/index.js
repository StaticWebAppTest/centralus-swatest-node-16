module.exports = async function (context, req) {
  const date = "2023-08-17T18:10:21.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

