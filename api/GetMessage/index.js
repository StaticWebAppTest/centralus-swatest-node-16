module.exports = async function (context, req) {
  const date = "2024-04-15T21:10:01.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

