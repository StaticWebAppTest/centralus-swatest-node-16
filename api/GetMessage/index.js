module.exports = async function (context, req) {
  const date = "2024-04-11T15:09:38.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

