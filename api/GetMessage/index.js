module.exports = async function (context, req) {
  const date = "2024-08-23T22:09:49.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

