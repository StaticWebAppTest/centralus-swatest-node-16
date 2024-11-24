module.exports = async function (context, req) {
  const date = "2024-11-24T05:12:04.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

