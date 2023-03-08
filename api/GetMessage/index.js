module.exports = async function (context, req) {
  const date = "2023-03-08T02:24:40.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

