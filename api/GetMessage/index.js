module.exports = async function (context, req) {
  const date = "2024-01-11T16:12:15.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

