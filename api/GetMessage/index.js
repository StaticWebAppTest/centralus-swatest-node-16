module.exports = async function (context, req) {
  const date = "2022-06-20T08:15:01.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

