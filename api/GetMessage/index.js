module.exports = async function (context, req) {
  const date = "2024-10-12T20:11:45.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

