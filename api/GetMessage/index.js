module.exports = async function (context, req) {
  const date = "2024-07-06T08:13:45.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

