module.exports = async function (context, req) {
  const date = "2023-10-27T00:40:16.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

