module.exports = async function (context, req) {
  const date = "2024-03-23T19:07:02.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

