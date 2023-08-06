module.exports = async function (context, req) {
  const date = "2023-08-06T08:10:18.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

