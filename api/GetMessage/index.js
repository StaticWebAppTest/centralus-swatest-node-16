module.exports = async function (context, req) {
  const date = "2024-05-16T16:11:30.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

