module.exports = async function (context, req) {
  const date = "2022-10-19T09:23:11.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

