module.exports = async function (context, req) {
  const date = "2024-05-03T17:08:25.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

