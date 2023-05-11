module.exports = async function (context, req) {
  const date = "2023-05-11T19:06:45.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

