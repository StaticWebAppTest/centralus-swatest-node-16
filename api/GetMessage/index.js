module.exports = async function (context, req) {
  const date = "2024-09-15T04:13:42.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

