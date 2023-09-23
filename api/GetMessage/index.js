module.exports = async function (context, req) {
  const date = "2023-09-23T02:12:53.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

