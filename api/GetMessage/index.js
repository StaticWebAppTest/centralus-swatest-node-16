module.exports = async function (context, req) {
  const date = "2024-06-22T18:12:21.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

