module.exports = async function (context, req) {
  const date = "2022-04-17T05:09:25.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

