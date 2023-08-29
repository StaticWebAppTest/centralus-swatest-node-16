module.exports = async function (context, req) {
  const date = "2023-08-29T13:11:40.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

