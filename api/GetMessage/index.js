module.exports = async function (context, req) {
  const date = "2024-04-09T15:09:17.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

