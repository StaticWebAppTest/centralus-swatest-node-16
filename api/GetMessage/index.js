module.exports = async function (context, req) {
  const date = "2024-06-23T18:12:21.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

