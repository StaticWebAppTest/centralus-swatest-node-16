module.exports = async function (context, req) {
  const date = "2023-07-01T11:07:37.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

