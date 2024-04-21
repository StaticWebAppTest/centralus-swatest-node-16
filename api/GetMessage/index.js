module.exports = async function (context, req) {
  const date = "2024-04-21T11:07:28.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

