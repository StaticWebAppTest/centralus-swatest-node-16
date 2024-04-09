module.exports = async function (context, req) {
  const date = "2024-04-09T13:09:32.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

