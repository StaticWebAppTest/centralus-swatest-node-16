module.exports = async function (context, req) {
  const date = "2024-11-27T06:18:02.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

