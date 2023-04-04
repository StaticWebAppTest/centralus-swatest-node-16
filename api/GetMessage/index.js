module.exports = async function (context, req) {
  const date = "2023-04-04T17:06:40.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

