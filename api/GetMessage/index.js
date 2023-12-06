module.exports = async function (context, req) {
  const date = "2023-12-06T01:52:28.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

