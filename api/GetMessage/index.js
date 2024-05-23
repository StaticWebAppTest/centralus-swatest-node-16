module.exports = async function (context, req) {
  const date = "2024-05-23T18:12:39.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

