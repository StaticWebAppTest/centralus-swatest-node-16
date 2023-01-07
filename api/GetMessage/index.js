module.exports = async function (context, req) {
  const date = "2023-01-07T16:11:32.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

