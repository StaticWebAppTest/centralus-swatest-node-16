module.exports = async function (context, req) {
  const date = "2022-06-16T08:15:24.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

