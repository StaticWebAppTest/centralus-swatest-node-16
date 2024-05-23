module.exports = async function (context, req) {
  const date = "2024-05-23T15:10:49.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

