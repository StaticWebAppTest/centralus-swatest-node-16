module.exports = async function (context, req) {
  const date = "2022-12-28T21:08:20.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

