module.exports = async function (context, req) {
  const date = "2023-05-28T20:08:19.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

