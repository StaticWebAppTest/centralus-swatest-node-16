module.exports = async function (context, req) {
  const date = "2022-06-19T14:08:54.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

