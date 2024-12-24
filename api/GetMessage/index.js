module.exports = async function (context, req) {
  const date = "2024-12-24T08:15:33.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

