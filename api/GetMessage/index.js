module.exports = async function (context, req) {
  const date = "2023-06-06T16:11:15.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

