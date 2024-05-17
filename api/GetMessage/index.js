module.exports = async function (context, req) {
  const date = "2024-05-17T01:51:45.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

