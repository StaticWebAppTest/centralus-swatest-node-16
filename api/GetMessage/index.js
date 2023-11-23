module.exports = async function (context, req) {
  const date = "2023-11-23T16:11:45.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

