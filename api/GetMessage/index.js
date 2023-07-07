module.exports = async function (context, req) {
  const date = "2023-07-07T16:12:48.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

