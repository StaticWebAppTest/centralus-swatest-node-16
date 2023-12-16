module.exports = async function (context, req) {
  const date = "2023-12-16T04:11:09.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

