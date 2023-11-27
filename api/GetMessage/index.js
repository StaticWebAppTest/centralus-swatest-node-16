module.exports = async function (context, req) {
  const date = "2023-11-27T05:09:14.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

