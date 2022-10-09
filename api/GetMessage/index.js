module.exports = async function (context, req) {
  const date = "2022-10-09T18:15:16.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

