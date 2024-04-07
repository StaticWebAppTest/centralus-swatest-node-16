module.exports = async function (context, req) {
  const date = "2024-04-07T08:13:09.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

