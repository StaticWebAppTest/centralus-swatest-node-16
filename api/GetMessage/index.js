module.exports = async function (context, req) {
  const date = "2022-06-25T11:08:59.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

