module.exports = async function (context, req) {
  const date = "2024-05-16T14:10:24.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

