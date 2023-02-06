module.exports = async function (context, req) {
  const date = "2023-02-06T04:12:07.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

