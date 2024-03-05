module.exports = async function (context, req) {
  const date = "2024-03-05T11:09:15.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

