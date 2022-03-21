module.exports = async function (context, req) {
  const date = "2022-03-21T05:09:36.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

