module.exports = async function (context, req) {
  const date = "2024-04-16T16:12:20.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

