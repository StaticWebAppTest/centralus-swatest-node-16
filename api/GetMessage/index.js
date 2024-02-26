module.exports = async function (context, req) {
  const date = "2024-02-26T09:09:56.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

