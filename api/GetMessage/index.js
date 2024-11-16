module.exports = async function (context, req) {
  const date = "2024-11-16T10:11:28.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

