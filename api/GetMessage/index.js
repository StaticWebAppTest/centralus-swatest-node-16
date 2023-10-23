module.exports = async function (context, req) {
  const date = "2023-10-23T03:09:36.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

