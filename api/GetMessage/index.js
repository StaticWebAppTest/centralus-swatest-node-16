module.exports = async function (context, req) {
  const date = "2023-05-30T16:10:31.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

