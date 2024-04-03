module.exports = async function (context, req) {
  const date = "2024-04-03T04:11:53.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

