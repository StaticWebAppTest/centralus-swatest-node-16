module.exports = async function (context, req) {
  const date = "2023-04-24T14:08:36.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

