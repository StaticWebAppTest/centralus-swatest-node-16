module.exports = async function (context, req) {
  const date = "2023-08-23T00:38:53.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

