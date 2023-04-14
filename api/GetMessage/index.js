module.exports = async function (context, req) {
  const date = "2023-04-14T17:07:26.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

