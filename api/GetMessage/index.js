module.exports = async function (context, req) {
  const date = "2023-08-13T07:07:12.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

