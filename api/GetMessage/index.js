module.exports = async function (context, req) {
  const date = "2023-02-14T05:09:54.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

