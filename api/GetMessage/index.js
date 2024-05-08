module.exports = async function (context, req) {
  const date = "2024-05-08T20:09:45.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

