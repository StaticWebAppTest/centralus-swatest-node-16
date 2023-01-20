module.exports = async function (context, req) {
  const date = "2023-01-20T07:09:11.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

