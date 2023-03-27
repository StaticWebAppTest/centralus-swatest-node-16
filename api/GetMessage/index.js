module.exports = async function (context, req) {
  const date = "2023-03-27T11:08:06.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

