module.exports = async function (context, req) {
  const date = "2024-05-28T15:09:42.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

