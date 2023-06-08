module.exports = async function (context, req) {
  const date = "2023-06-08T23:09:09.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

