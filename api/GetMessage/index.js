module.exports = async function (context, req) {
  const date = "2022-03-28T09:11:18.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

