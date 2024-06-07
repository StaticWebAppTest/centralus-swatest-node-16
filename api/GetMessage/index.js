module.exports = async function (context, req) {
  const date = "2024-06-07T21:11:25.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

