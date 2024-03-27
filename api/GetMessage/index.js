module.exports = async function (context, req) {
  const date = "2024-03-27T11:07:51.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

