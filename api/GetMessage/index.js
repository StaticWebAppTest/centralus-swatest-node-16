module.exports = async function (context, req) {
  const date = "2023-04-12T18:11:21.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

