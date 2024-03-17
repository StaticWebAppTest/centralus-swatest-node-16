module.exports = async function (context, req) {
  const date = "2024-03-17T01:45:20.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

