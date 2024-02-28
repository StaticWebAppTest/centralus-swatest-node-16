module.exports = async function (context, req) {
  const date = "2024-02-28T18:11:21.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

