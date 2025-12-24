module.exports = async function (context, req) {
  const date = "2025-12-24T14:13:40.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

