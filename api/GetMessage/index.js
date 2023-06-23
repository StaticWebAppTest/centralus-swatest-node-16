module.exports = async function (context, req) {
  const date = "2023-06-23T23:09:46.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

