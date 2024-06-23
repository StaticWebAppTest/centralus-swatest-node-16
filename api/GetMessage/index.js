module.exports = async function (context, req) {
  const date = "2024-06-23T19:09:18.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

