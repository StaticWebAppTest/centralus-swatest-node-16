module.exports = async function (context, req) {
  const date = "2023-07-29T01:54:27.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

