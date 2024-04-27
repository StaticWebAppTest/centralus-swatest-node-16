module.exports = async function (context, req) {
  const date = "2024-04-27T02:19:22.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

