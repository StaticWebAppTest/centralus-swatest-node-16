module.exports = async function (context, req) {
  const date = "2024-04-06T17:09:11.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

