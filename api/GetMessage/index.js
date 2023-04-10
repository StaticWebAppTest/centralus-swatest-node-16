module.exports = async function (context, req) {
  const date = "2023-04-10T02:26:39.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

