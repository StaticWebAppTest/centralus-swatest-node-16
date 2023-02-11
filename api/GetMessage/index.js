module.exports = async function (context, req) {
  const date = "2023-02-11T19:07:12.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

