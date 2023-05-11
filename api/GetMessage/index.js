module.exports = async function (context, req) {
  const date = "2023-05-11T01:59:28.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

