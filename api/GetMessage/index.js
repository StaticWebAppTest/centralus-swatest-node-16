module.exports = async function (context, req) {
  const date = "2023-07-08T01:00:56.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

