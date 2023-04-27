module.exports = async function (context, req) {
  const date = "2023-04-27T06:11:58.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

