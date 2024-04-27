module.exports = async function (context, req) {
  const date = "2024-04-27T16:10:03.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

