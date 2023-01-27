module.exports = async function (context, req) {
  const date = "2023-01-27T17:08:47.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

