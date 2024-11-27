module.exports = async function (context, req) {
  const date = "2024-11-27T15:12:52.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

