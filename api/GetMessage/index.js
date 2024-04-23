module.exports = async function (context, req) {
  const date = "2024-04-23T18:11:41.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

