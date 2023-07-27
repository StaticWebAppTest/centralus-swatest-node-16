module.exports = async function (context, req) {
  const date = "2023-07-27T00:45:43.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

