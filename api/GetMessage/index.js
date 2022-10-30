module.exports = async function (context, req) {
  const date = "2022-10-30T01:14:13.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

