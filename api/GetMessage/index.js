module.exports = async function (context, req) {
  const date = "2024-04-26T08:12:11.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

