module.exports = async function (context, req) {
  const date = "2024-05-25T22:09:12.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

