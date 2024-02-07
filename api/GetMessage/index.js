module.exports = async function (context, req) {
  const date = "2024-02-07T01:39:54.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

