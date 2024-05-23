module.exports = async function (context, req) {
  const date = "2024-05-23T04:11:46.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

