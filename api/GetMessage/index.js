module.exports = async function (context, req) {
  const date = "2024-10-14T14:11:40.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

