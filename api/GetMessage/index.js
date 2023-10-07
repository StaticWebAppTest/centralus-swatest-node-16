module.exports = async function (context, req) {
  const date = "2023-10-07T23:07:48.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

