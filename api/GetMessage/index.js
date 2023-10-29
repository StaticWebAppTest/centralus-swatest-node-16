module.exports = async function (context, req) {
  const date = "2023-10-29T04:10:13.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

