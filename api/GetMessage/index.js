module.exports = async function (context, req) {
  const date = "2023-04-16T15:07:53.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

