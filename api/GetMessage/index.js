module.exports = async function (context, req) {
  const date = "2023-10-03T02:16:30.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

