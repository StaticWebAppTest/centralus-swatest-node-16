module.exports = async function (context, req) {
  const date = "2023-12-20T12:14:07.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

