module.exports = async function (context, req) {
  const date = "2023-11-29T01:52:07.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

