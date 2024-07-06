module.exports = async function (context, req) {
  const date = "2024-07-06T09:11:15.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

