module.exports = async function (context, req) {
  const date = "2024-03-06T10:09:55.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

