module.exports = async function (context, req) {
  const date = "2024-06-21T22:10:07.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

