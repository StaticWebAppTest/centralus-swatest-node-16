module.exports = async function (context, req) {
  const date = "2023-06-13T04:10:58.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

