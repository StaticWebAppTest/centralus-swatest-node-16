module.exports = async function (context, req) {
  const date = "2023-12-28T08:11:55.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

