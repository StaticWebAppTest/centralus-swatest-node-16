module.exports = async function (context, req) {
  const date = "2024-01-09T09:09:37.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

