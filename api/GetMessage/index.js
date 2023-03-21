module.exports = async function (context, req) {
  const date = "2023-03-21T13:09:00.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

