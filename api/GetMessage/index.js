module.exports = async function (context, req) {
  const date = "2024-07-07T11:08:15.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

