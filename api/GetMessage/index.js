module.exports = async function (context, req) {
  const date = "2024-07-28T18:13:52.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

