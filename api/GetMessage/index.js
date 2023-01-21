module.exports = async function (context, req) {
  const date = "2023-01-21T19:07:09.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

