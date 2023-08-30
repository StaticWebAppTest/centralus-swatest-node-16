module.exports = async function (context, req) {
  const date = "2023-08-30T04:10:18.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

