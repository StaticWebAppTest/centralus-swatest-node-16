module.exports = async function (context, req) {
  const date = "2023-04-14T13:11:43.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

