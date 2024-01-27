module.exports = async function (context, req) {
  const date = "2024-01-27T11:06:30.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

