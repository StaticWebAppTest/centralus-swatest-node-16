module.exports = async function (context, req) {
  const date = "2022-12-11T08:11:54.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

