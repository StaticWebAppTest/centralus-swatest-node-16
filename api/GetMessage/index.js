module.exports = async function (context, req) {
  const date = "2023-12-30T20:08:51.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

