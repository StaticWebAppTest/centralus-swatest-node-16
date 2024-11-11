module.exports = async function (context, req) {
  const date = "2024-11-11T15:11:46.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

