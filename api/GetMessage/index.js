module.exports = async function (context, req) {
  const date = "2024-05-06T02:24:23.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

