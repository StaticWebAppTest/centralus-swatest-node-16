module.exports = async function (context, req) {
  const date = "2024-05-27T04:13:06.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

