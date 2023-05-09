module.exports = async function (context, req) {
  const date = "2023-05-09T18:11:07.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

