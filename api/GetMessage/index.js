module.exports = async function (context, req) {
  const date = "2024-01-30T12:15:21.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

