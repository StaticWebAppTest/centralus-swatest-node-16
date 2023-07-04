module.exports = async function (context, req) {
  const date = "2023-07-04T09:10:33.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

