module.exports = async function (context, req) {
  const date = "2023-07-10T17:09:14.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

