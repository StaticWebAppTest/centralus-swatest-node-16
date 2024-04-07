module.exports = async function (context, req) {
  const date = "2024-04-07T07:07:56.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

