module.exports = async function (context, req) {
  const date = "2024-05-27T01:54:33.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

