module.exports = async function (context, req) {
  const date = "2023-07-24T12:17:37.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

