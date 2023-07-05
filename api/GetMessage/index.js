module.exports = async function (context, req) {
  const date = "2023-07-05T15:11:23.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

