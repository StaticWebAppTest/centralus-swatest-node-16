module.exports = async function (context, req) {
  const date = "2024-06-27T16:12:38.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

