module.exports = async function (context, req) {
  const date = "2023-03-14T01:58:40.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

