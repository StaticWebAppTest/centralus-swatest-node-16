module.exports = async function (context, req) {
  const date = "2023-03-05T15:09:11.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

