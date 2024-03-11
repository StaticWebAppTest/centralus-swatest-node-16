module.exports = async function (context, req) {
  const date = "2024-03-11T21:09:35.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

