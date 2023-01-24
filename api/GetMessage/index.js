module.exports = async function (context, req) {
  const date = "2023-01-24T18:11:43.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

