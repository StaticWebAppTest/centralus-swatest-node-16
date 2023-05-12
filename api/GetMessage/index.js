module.exports = async function (context, req) {
  const date = "2023-05-12T04:10:31.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

