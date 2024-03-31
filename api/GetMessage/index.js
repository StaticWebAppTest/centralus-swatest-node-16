module.exports = async function (context, req) {
  const date = "2024-03-31T15:07:53.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

