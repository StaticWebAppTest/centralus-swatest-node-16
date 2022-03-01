module.exports = async function (context, req) {
  const date = "2022-03-01T05:09:15.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

