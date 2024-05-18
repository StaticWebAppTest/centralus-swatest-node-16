module.exports = async function (context, req) {
  const date = "2024-05-18T16:10:40.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

