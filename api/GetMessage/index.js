module.exports = async function (context, req) {
  const date = "2024-01-27T23:09:02.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

