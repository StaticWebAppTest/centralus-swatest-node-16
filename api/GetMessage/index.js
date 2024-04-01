module.exports = async function (context, req) {
  const date = "2024-04-01T14:08:52.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

