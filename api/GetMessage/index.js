module.exports = async function (context, req) {
  const date = "2023-07-30T18:09:37.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

