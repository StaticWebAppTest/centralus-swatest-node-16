module.exports = async function (context, req) {
  const date = "2023-02-24T04:12:23.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

