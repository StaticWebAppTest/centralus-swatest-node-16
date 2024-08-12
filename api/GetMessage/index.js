module.exports = async function (context, req) {
  const date = "2024-08-12T17:09:35.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

