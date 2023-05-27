module.exports = async function (context, req) {
  const date = "2023-05-27T15:07:54.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

