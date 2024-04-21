module.exports = async function (context, req) {
  const date = "2024-04-21T18:12:16.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

