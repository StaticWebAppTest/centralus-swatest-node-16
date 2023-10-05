module.exports = async function (context, req) {
  const date = "2023-10-05T02:18:52.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

