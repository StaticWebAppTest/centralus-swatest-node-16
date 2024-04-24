module.exports = async function (context, req) {
  const date = "2024-04-24T09:09:39.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

