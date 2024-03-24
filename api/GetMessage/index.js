module.exports = async function (context, req) {
  const date = "2024-03-24T09:10:19.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

