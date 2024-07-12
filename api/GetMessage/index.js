module.exports = async function (context, req) {
  const date = "2024-07-12T23:09:45.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

