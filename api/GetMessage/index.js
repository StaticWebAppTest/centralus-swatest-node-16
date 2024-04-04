module.exports = async function (context, req) {
  const date = "2024-04-04T05:10:40.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

