module.exports = async function (context, req) {
  const date = "2023-04-23T11:06:58.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

