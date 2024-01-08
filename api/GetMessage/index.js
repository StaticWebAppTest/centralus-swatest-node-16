module.exports = async function (context, req) {
  const date = "2024-01-08T14:09:07.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

