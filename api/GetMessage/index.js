module.exports = async function (context, req) {
  const date = "2023-01-12T14:12:50.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

