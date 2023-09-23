module.exports = async function (context, req) {
  const date = "2023-09-23T04:09:46.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

