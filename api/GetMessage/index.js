module.exports = async function (context, req) {
  const date = "2024-02-25T04:10:38.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

