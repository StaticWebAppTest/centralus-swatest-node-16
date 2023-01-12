module.exports = async function (context, req) {
  const date = "2023-01-12T04:11:51.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

