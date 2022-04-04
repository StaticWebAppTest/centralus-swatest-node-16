module.exports = async function (context, req) {
  const date = "2022-04-04T13:21:25.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

