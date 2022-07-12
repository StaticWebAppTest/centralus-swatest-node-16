module.exports = async function (context, req) {
  const date = "2022-07-12T16:15:05.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

