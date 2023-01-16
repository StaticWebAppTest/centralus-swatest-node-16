module.exports = async function (context, req) {
  const date = "2023-01-16T07:09:21.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

