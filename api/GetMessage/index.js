module.exports = async function (context, req) {
  const date = "2024-04-07T16:10:04.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

