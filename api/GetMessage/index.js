module.exports = async function (context, req) {
  const date = "2023-03-09T16:13:57.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

