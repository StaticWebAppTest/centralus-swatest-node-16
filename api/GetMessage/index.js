module.exports = async function (context, req) {
  const date = "2023-09-17T01:45:36.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

