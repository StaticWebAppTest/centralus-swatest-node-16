module.exports = async function (context, req) {
  const date = "2023-09-16T04:09:59.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

