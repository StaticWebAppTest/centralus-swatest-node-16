module.exports = async function (context, req) {
  const date = "2023-09-09T11:06:20.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

