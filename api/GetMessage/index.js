module.exports = async function (context, req) {
  const date = "2024-10-20T20:11:44.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

