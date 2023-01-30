module.exports = async function (context, req) {
  const date = "2023-01-30T09:10:18.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

