module.exports = async function (context, req) {
  const date = "2024-06-23T04:12:00.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

