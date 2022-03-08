module.exports = async function (context, req) {
  const date = "2022-03-08T04:12:56.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

