module.exports = async function (context, req) {
  const date = "2023-11-12T16:10:16.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

