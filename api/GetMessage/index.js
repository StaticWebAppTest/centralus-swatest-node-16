module.exports = async function (context, req) {
  const date = "2024-05-12T17:07:37.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

