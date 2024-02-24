module.exports = async function (context, req) {
  const date = "2024-02-24T16:09:44.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

