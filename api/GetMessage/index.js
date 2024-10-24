module.exports = async function (context, req) {
  const date = "2024-10-24T19:09:05.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

