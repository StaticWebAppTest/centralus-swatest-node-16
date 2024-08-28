module.exports = async function (context, req) {
  const date = "2024-08-28T14:10:32.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

