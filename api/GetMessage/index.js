module.exports = async function (context, req) {
  const date = "2024-06-28T04:12:12.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

