module.exports = async function (context, req) {
  const date = "2024-03-21T09:09:03.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

