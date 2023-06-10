module.exports = async function (context, req) {
  const date = "2023-06-10T12:14:39.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

