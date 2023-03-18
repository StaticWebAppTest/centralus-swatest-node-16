module.exports = async function (context, req) {
  const date = "2023-03-18T08:11:33.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

