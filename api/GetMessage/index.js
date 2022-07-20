module.exports = async function (context, req) {
  const date = "2022-07-20T21:09:32.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

