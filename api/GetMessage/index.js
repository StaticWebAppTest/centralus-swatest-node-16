module.exports = async function (context, req) {
  const date = "2024-03-14T15:39:06.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

