module.exports = async function (context, req) {
  const date = "2022-05-19T08:14:28.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

