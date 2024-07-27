module.exports = async function (context, req) {
  const date = "2024-07-27T14:09:46.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

