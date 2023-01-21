module.exports = async function (context, req) {
  const date = "2023-01-21T11:07:23.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

