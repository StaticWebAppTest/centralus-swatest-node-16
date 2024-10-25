module.exports = async function (context, req) {
  const date = "2024-10-25T23:12:25.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

