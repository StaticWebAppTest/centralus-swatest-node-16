module.exports = async function (context, req) {
  const date = "2023-07-01T18:11:16.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

