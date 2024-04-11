module.exports = async function (context, req) {
  const date = "2024-04-11T18:11:24.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

