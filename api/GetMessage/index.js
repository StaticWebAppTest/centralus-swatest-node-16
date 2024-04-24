module.exports = async function (context, req) {
  const date = "2024-04-24T14:09:38.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

