module.exports = async function (context, req) {
  const date = "2024-03-28T15:10:05.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

