module.exports = async function (context, req) {
  const date = "2023-06-03T16:10:42.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

