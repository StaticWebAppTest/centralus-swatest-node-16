module.exports = async function (context, req) {
  const date = "2022-10-26T08:15:33.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

