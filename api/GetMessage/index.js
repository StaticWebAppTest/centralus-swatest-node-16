module.exports = async function (context, req) {
  const date = "2023-01-27T15:09:51.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

