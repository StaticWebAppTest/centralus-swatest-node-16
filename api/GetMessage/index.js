module.exports = async function (context, req) {
  const date = "2024-11-23T17:09:37.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

