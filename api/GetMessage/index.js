module.exports = async function (context, req) {
  const date = "2023-01-14T16:11:30.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

