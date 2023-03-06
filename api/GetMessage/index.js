module.exports = async function (context, req) {
  const date = "2023-03-06T06:13:37.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

