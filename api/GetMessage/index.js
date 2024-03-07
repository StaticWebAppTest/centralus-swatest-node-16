module.exports = async function (context, req) {
  const date = "2024-03-07T17:09:06.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

