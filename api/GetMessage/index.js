module.exports = async function (context, req) {
  const date = "2024-05-15T18:12:21.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

