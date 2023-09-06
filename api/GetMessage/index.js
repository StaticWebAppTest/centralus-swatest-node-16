module.exports = async function (context, req) {
  const date = "2023-09-06T13:11:52.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

