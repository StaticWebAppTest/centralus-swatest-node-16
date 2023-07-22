module.exports = async function (context, req) {
  const date = "2023-07-22T08:10:09.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

