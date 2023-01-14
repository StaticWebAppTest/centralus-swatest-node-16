module.exports = async function (context, req) {
  const date = "2023-01-14T04:11:01.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

