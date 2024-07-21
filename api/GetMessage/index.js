module.exports = async function (context, req) {
  const date = "2024-07-21T15:11:07.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

