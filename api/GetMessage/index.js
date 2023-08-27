module.exports = async function (context, req) {
  const date = "2023-08-27T11:06:28.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

