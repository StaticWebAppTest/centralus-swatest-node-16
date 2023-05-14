module.exports = async function (context, req) {
  const date = "2023-05-14T10:08:20.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

