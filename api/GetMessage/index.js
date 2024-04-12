module.exports = async function (context, req) {
  const date = "2024-04-12T09:10:16.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

