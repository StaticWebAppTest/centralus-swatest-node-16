module.exports = async function (context, req) {
  const date = "2023-04-19T11:07:35.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

