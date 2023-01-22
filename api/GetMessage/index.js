module.exports = async function (context, req) {
  const date = "2023-01-22T06:11:28.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

