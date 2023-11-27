module.exports = async function (context, req) {
  const date = "2023-11-27T23:09:09.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

