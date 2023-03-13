module.exports = async function (context, req) {
  const date = "2023-03-13T04:12:06.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

