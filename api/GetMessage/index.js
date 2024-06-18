module.exports = async function (context, req) {
  const date = "2024-06-18T01:56:51.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

