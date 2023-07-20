module.exports = async function (context, req) {
  const date = "2023-07-20T18:11:06.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

