module.exports = async function (context, req) {
  const date = "2024-07-23T14:10:18.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

