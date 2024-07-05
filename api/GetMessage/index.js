module.exports = async function (context, req) {
  const date = "2024-07-05T11:08:53.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

