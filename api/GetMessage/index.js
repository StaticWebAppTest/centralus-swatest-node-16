module.exports = async function (context, req) {
  const date = "2023-08-16T19:06:40.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

