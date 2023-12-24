module.exports = async function (context, req) {
  const date = "2023-12-24T12:15:00.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

