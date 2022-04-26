module.exports = async function (context, req) {
  const date = "2022-04-26T23:11:07.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

