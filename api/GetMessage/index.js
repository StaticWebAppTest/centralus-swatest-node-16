module.exports = async function (context, req) {
  const date = "2024-10-25T12:22:13.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

