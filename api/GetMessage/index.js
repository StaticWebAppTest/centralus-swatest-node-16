module.exports = async function (context, req) {
  const date = "2024-07-15T04:15:08.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

