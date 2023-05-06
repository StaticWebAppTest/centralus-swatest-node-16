module.exports = async function (context, req) {
  const date = "2023-05-06T18:10:33.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

