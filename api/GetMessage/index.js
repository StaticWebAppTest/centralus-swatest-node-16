module.exports = async function (context, req) {
  const date = "2024-06-09T11:07:55.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

