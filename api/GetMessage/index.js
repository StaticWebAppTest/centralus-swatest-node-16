module.exports = async function (context, req) {
  const date = "2024-07-19T12:18:46.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

