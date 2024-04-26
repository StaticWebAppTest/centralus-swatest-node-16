module.exports = async function (context, req) {
  const date = "2024-04-26T17:10:03.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

