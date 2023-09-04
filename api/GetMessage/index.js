module.exports = async function (context, req) {
  const date = "2023-09-04T07:08:33.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

