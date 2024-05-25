module.exports = async function (context, req) {
  const date = "2024-05-25T01:51:02.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

