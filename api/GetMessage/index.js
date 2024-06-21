module.exports = async function (context, req) {
  const date = "2024-06-21T17:11:07.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

