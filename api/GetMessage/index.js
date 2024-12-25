module.exports = async function (context, req) {
  const date = "2024-12-25T22:10:30.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

