module.exports = async function (context, req) {
  const date = "2024-04-12T01:43:08.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

