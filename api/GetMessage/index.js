module.exports = async function (context, req) {
  const date = "2023-06-07T03:14:07.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

