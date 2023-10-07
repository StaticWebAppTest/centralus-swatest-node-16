module.exports = async function (context, req) {
  const date = "2023-10-07T20:08:21.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

