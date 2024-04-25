module.exports = async function (context, req) {
  const date = "2024-04-25T00:45:23.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

