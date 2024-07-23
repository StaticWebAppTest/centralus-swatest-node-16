module.exports = async function (context, req) {
  const date = "2024-07-23T23:12:02.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

