module.exports = async function (context, req) {
  const date = "2023-11-28T00:43:59.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

