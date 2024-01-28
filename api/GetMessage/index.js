module.exports = async function (context, req) {
  const date = "2024-01-28T23:09:54.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

