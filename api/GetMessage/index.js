module.exports = async function (context, req) {
  const date = "2022-04-22T20:11:33.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

