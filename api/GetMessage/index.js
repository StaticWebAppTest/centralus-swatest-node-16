module.exports = async function (context, req) {
  const date = "2023-04-28T16:11:02.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

