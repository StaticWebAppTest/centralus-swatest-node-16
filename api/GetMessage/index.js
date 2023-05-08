module.exports = async function (context, req) {
  const date = "2023-05-08T05:08:33.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

