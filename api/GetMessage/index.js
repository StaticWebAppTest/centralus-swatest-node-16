module.exports = async function (context, req) {
  const date = "2024-03-05T15:09:01.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

