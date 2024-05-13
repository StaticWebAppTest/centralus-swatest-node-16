module.exports = async function (context, req) {
  const date = "2024-05-13T18:11:11.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

