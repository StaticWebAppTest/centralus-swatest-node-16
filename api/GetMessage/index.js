module.exports = async function (context, req) {
  const date = "2024-03-24T15:08:12.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

