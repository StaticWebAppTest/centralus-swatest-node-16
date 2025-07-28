module.exports = async function (context, req) {
  const date = "2025-07-28T12:30:40.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

