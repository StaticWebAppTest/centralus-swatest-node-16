module.exports = async function (context, req) {
  const date = "2024-10-25T18:15:38.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

