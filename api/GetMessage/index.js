module.exports = async function (context, req) {
  const date = "2024-07-07T09:11:38.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

