module.exports = async function (context, req) {
  const date = "2024-06-11T06:13:58.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

