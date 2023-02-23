module.exports = async function (context, req) {
  const date = "2023-02-23T22:09:33.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

