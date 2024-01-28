module.exports = async function (context, req) {
  const date = "2024-01-28T06:10:26.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

