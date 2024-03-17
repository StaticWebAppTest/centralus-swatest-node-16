module.exports = async function (context, req) {
  const date = "2024-03-17T17:07:24.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

