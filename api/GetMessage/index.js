module.exports = async function (context, req) {
  const date = "2024-05-16T06:11:20.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

