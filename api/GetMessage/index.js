module.exports = async function (context, req) {
  const date = "2024-11-26T17:11:30.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

