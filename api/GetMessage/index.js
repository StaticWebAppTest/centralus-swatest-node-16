module.exports = async function (context, req) {
  const date = "2023-06-13T07:08:47.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

