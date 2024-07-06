module.exports = async function (context, req) {
  const date = "2024-07-06T23:09:15.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

