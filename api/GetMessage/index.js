module.exports = async function (context, req) {
  const date = "2024-04-24T01:49:05.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

