module.exports = async function (context, req) {
  const date = "2024-03-04T00:41:52.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

