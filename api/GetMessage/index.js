module.exports = async function (context, req) {
  const date = "2024-03-14T02:15:00.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

