module.exports = async function (context, req) {
  const date = "2022-11-11T08:16:44.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

