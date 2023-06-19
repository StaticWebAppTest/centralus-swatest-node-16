module.exports = async function (context, req) {
  const date = "2023-06-19T10:09:42.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

