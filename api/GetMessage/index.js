module.exports = async function (context, req) {
  const date = "2024-11-09T18:13:33.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

