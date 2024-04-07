module.exports = async function (context, req) {
  const date = "2024-04-07T11:08:21.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

