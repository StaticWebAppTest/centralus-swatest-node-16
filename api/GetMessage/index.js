module.exports = async function (context, req) {
  const date = "2024-07-12T10:11:02.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

