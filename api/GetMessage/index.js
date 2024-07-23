module.exports = async function (context, req) {
  const date = "2024-07-23T15:11:36.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

