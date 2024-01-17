module.exports = async function (context, req) {
  const date = "2024-01-17T20:09:57.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

