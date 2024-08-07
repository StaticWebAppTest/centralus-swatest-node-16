module.exports = async function (context, req) {
  const date = "2024-08-07T11:08:52.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

