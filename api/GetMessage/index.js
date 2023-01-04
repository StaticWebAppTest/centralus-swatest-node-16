module.exports = async function (context, req) {
  const date = "2023-01-04T17:11:17.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

