module.exports = async function (context, req) {
  const date = "2024-04-10T04:11:09.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

