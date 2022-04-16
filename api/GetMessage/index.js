module.exports = async function (context, req) {
  const date = "2022-04-16T13:18:18.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

