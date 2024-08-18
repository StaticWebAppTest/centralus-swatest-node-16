module.exports = async function (context, req) {
  const date = "2024-08-18T13:12:05.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

