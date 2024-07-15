module.exports = async function (context, req) {
  const date = "2024-07-15T14:08:56.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

