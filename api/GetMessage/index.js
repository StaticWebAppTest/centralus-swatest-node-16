module.exports = async function (context, req) {
  const date = "2023-05-23T11:07:10.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

