module.exports = async function (context, req) {
  const date = "2024-04-23T17:09:26.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

