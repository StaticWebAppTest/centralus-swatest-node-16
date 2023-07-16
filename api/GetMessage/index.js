module.exports = async function (context, req) {
  const date = "2023-07-16T18:11:24.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

