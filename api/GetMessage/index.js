module.exports = async function (context, req) {
  const date = "2023-04-11T01:58:59.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

