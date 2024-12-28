module.exports = async function (context, req) {
  const date = "2024-12-28T15:10:21.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

