module.exports = async function (context, req) {
  const date = "2024-06-08T14:09:27.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

