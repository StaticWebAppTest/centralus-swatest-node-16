module.exports = async function (context, req) {
  const date = "2023-12-14T12:17:21.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

