module.exports = async function (context, req) {
  const date = "2023-08-10T02:02:12.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

