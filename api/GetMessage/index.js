module.exports = async function (context, req) {
  const date = "2023-10-08T08:10:15.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

