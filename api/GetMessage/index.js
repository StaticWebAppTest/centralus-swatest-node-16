module.exports = async function (context, req) {
  const date = "2024-10-14T12:22:52.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

