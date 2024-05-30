module.exports = async function (context, req) {
  const date = "2024-05-30T18:14:20.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

