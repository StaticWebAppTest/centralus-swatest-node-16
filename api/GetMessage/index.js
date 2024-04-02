module.exports = async function (context, req) {
  const date = "2024-04-02T17:09:30.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

