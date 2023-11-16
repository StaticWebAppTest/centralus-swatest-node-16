module.exports = async function (context, req) {
  const date = "2023-11-16T19:06:06.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

