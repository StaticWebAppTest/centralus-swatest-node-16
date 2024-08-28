module.exports = async function (context, req) {
  const date = "2024-08-28T21:11:33.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

