module.exports = async function (context, req) {
  const date = "2022-03-18T05:09:27.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

