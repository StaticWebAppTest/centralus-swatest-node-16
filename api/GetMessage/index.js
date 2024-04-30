module.exports = async function (context, req) {
  const date = "2024-04-30T07:09:57.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

