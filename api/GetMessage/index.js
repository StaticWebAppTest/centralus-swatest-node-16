module.exports = async function (context, req) {
  const date = "2024-05-31T15:11:05.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

