module.exports = async function (context, req) {
  const date = "2024-09-17T08:15:09.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

