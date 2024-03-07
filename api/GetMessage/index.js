module.exports = async function (context, req) {
  const date = "2024-03-07T10:09:12.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

