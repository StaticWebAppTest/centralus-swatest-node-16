module.exports = async function (context, req) {
  const date = "2024-03-25T01:43:33.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

