module.exports = async function (context, req) {
  const date = "2024-07-26T06:15:14.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

