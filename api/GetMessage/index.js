module.exports = async function (context, req) {
  const date = "2024-04-23T16:11:32.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

