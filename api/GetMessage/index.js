module.exports = async function (context, req) {
  const date = "2023-04-29T11:06:56.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

