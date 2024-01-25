module.exports = async function (context, req) {
  const date = "2024-01-25T15:10:03.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

