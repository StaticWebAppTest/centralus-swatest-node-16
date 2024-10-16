module.exports = async function (context, req) {
  const date = "2024-10-16T15:12:11.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

