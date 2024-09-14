module.exports = async function (context, req) {
  const date = "2024-09-14T02:06:52.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

