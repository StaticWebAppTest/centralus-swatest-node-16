module.exports = async function (context, req) {
  const date = "2023-12-07T09:09:27.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

