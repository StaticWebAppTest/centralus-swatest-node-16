module.exports = async function (context, req) {
  const date = "2023-04-11T20:09:21.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

