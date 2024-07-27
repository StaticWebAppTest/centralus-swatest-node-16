module.exports = async function (context, req) {
  const date = "2024-07-27T17:09:11.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

