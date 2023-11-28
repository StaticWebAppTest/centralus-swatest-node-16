module.exports = async function (context, req) {
  const date = "2023-11-28T20:09:51.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

