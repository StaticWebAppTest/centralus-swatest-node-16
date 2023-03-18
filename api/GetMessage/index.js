module.exports = async function (context, req) {
  const date = "2023-03-18T18:11:05.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

