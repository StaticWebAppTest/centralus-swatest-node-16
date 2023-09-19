module.exports = async function (context, req) {
  const date = "2023-09-19T19:06:52.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

