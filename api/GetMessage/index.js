module.exports = async function (context, req) {
  const date = "2024-01-21T11:07:15.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

