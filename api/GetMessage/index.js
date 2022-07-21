module.exports = async function (context, req) {
  const date = "2022-07-21T05:23:43.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

